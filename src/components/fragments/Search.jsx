import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
function Search({ handle }) {
	return (
		<div className="search-fixed">
			<div className="search-header">
				<ArrowBackIcon onClick={handle} />
				<form action="" onSubmit={() => {}}>
					<input type="text" placeholder="Mahsulot bo'yicha qidirish" />
				</form>
				<SearchIcon />
			</div>
		</div>
	);
}

export default Search;
