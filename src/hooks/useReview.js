import { CREATE_REVIEW } from '../graphql/queries';
import { useMutation } from '@apollo/react-hooks';

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({
      variables: { review: { text, rating, ownerName, repositoryName } },
    });
    return data;
  };

  return [createReview, result];
};

export default useReview;
