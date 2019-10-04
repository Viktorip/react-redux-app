import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {articles: state.articles, error: state.error};
};

const ConnectedList = ({articles, error}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
        {error}
    </ul>
    
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;