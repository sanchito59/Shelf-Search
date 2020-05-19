import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Bookshelf = (props) => {
  console.log(props);
  // const { id: id } = useParams();

  return (
    <>
      <h1>BOOKSHELF: 5</h1>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/bookshelves">Bookshelves</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          5
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
export default Bookshelf;
