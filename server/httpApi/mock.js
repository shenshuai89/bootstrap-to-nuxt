import { apiGet } from '~/composables/useApi';

// 获取文章列表
export const queryArticleList = async (params) => {
  return await apiGet('/api/v1/topics', params);
};
