import { useQuery } from '@apollo/react-hooks';
import {
  GET_FILTERED_REPOSITORIES,
  GET_REPOSITORIES,
} from '../graphql/queries';

const useRepositories = (variables) => {
  const repositories = useQuery(GET_FILTERED_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
    variables,
  });

  return { repositories };
};
export default useRepositories;
