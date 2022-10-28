import React, { useState, useCallback, useEffect } from 'react';
import * as k from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { api } from '../../services/api';

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
    <k.Container>
      <h1>
        <FaGithub />
        My repositories
      </h1>

      <k.Form onSubmit={handleSubmit} loading={loading ? 1 : 0} error={alert}>
        <input
          type="text"
          placeholder="new repository"
          value={newRepo}
          onChange={handleInputChange}
        />

        <k.SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </k.SubmitButton>
      </k.Form>

      <k.List>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <span>{repo.name}</span>
            <k.DeleteButton onClick={() => handleDelete(repo.name)}>
              <FaTrash size={14} />
            </k.DeleteButton>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </k.List>
    </k.Container>
  );
}
