import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepo = (id) => {
  const repository = useQuery(GET_REPOSITORY, {
    // fetchPolicy: 'cache-and-network',
    // Other options
    variables: { id: id },
  });

  return { repository };
};

export default useRepo;
