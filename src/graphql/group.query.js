import gql from 'graphql-tag';

const GROUP_QUERY = gql`
  query group($groupId: Int!, $limit: Int, $offset: Int) {
    group(id: $groupId) {
      id
      name
      users {
        id
        username
      }
      messages(limit: $limit, offset: $offset) {
        ... MessageFragment
      }
    }
  }
`;
export default GROUP_QUERY;