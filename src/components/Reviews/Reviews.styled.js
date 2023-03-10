import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-top: 1px solid black;

  & .name {
    text-align: center;
    flex-grow: 1;
    min-width: 200px;
  }

  & h3 {
    font-size: 20px;
    word-break: break-all;
  }

  & img {
    max-width: 80px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  & .read-or-hide {
    color: rgb(192, 192, 192);
    cursor: pointer;
  }

  .read-more-button {
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
  }
`;
