import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
//选择新闻类型action
export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}
//废弃新闻类型action
export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}
//开始获取新闻action
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}
//获取新闻成功的action
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}

//是否需要获取文章
function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

//如果需要则开始获取文章
export function fetchPostsIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
  }
}
