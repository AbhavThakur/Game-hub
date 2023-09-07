import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f9965f23ca7a49bfafceb5705567a8ab',
  },
});
