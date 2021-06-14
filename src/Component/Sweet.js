import React from 'react';
import pexels from './pexels';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class Sweet extends React.Component {
    state = { photos: [] };

    onSearchSubmit = async (term) => {
        const response = await pexels.get(`/v1/search`, {
            params: {
                query: term,
                per_page: 20,
                page: 1
            }
        });
        this.setState({ photos: response.data.photos });
    }

    render() {
    return (
    <div className="SweetSearch" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <br></br>
        <ImageList images={this.state.photos} />
    </div>
    );
    };
}

