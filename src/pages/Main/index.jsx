import React, { useState, useCallback, useEffect } from 'react';
import * as k from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { TiPlus } from 'react-icons/ti';
import { AiOutlineEye } from 'react-icons/ai';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const repoStorage = window.localStorage.getItem('repos');

    if (repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('repos', JSON.stringify(repositories));
  }, [repositories]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);

        try {
          if (newRepo === '') {
            throw new Error('You must write a repository');
          }

          const res = await api.get(`repos/${newRepo}`);

          const anyName = repositories.find((repo) => repo.name === newRepo);

          if (anyName) {
            throw new Error('This repository already exist');
          }
          const data = {
            name: res.data.full_name,
          };

          setRepositories([...repositories, data]);
          setNewRepo('');
        } catch (err) {
          console.log(err);
          setAlert(true);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositories],
  );

  const handleDelete = useCallback(
    (repo) => {
      const find = repositories.filter((r) => r.name !== repo);
      setRepositories(find);
    },
    [repositories],
  );

  return (
    <>
      <k.Container>
        <k.H1 data-text="Save&nbsp;your&nbsp;repositories">
          Save your repositories
        </k.H1>

        <k.Main>
          <k.Form
            onSubmit={handleSubmit}
            loading={loading ? 1 : 0}
            error={alert}
          >
            <k.InputContainer>
              <input
                required
                type="text"
                value={newRepo}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Name</label>
            </k.InputContainer>

            <k.SubmitButton loading={loading ? 1 : 0}>
              {loading ? <FaSpinner color="#FFF" /> : <TiPlus color="#FFF" />}
            </k.SubmitButton>
          </k.Form>

          <k.RepositoriesContainer>
            {repositories.map((repo) => (
              <k.Card key={repo.name}>
                <span>{repo.name}</span>
                <k.RepositoryInfo
                  to={`/repository/${encodeURIComponent(repo.name)}`}
                >
                  <AiOutlineEye />
                </k.RepositoryInfo>
                <k.DeleteButton onClick={() => handleDelete(repo.name)}>
                  <FaTrash />
                </k.DeleteButton>
              </k.Card>
            ))}
          </k.RepositoriesContainer>
        </k.Main>
      </k.Container>
    </>
  );
}
