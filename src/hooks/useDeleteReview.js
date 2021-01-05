import { gql, useMutation } from '@apollo/react-hooks';

const DELETE_REVIEW = gql`
  mutation($id: ID!) {
    deleteReview(id: $id)
  }
`;

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const { data } = await mutate({
      variables: { id: id },
    });
    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
