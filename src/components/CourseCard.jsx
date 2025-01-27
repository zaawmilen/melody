import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1em;
  margin: 1em 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CourseCard = ({ name, category, duration, description }) => (
  <Card>
    <h3>{name} ({category})</h3>
    <p>{description}</p>
    <p>Duration: {duration}</p>
  </Card>
);

export default CourseCard;
