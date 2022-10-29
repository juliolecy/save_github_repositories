import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import * as k from './styles';
import { FaArrowLeft } from 'react-icons/fa';

export default function Repository() {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { state: 'all', label: 'All', active: true },
    { state: 'open', label: 'Open', active: false },
    { state: 'closed', label: 'Closed', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    async function load() {
      const repositoryName = params.repository;
      const [repositoryData, repositoryIssues] = await Promise.all([
        api.get(`/repos/${repositoryName}`),
        api.get(`/repos/${repositoryName}/issues`, {
          params: {
            state: filters.find((f) => f.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(repositoryIssues.data);

      setLoading(false);
    }
    load();
  }, [params.repository, filters]);

  useEffect(() => {
    async function loadNewIssues() {
      const repo = params.repository;
      const res = await api.get(`/repos/${repo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5,
        },
      });
      setIssues(res.data);
    }
    loadNewIssues();
  }, [filters, filterIndex, params.repository, page]);

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleFilter(i) {
    setFilterIndex(i);
  }

  if (loading) {
    return (
      <k.Container>
        <k.Loading />;
      </k.Container>
    );
  }

  return (
    <k.Container>
      <k.BackButton to="/">
        <FaArrowLeft size={20} color="#000" />
      </k.BackButton>
      <k.Owner>
        <h1>{repository.name}</h1>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <p>{repository.description}</p>
      </k.Owner>

      <k.PageActions>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage('back')}
        >
          Back
        </button>

        <k.FilterList active={filterIndex}>
          {filters.map((filter, i) => (
            <button
              type="button"
              key={filter.label}
              onClick={() => handleFilter(i)}
            >
              {filter.label}
            </button>
          ))}
        </k.FilterList>

        <button type="button" onClick={() => handlePage('next')}>
          Next
        </button>
      </k.PageActions>

      <k.IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>

                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
            </div>
          </li>
        ))}
      </k.IssuesList>
    </k.Container>
  );
}
