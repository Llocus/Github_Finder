import axios from "axios";

const githubAPI = 'https://api.github.com/users/'

export const getGithubData = (username: string) => axios.get(githubAPI + username)
.then(function (response) {
  return response
})
.catch(function (error) {
    return error
})

export const getGithubRepos = (username: string) => axios.get(githubAPI + username + '/repos')
.then(function (response) {
  return response
})
.catch(function (error) {
    return error
})