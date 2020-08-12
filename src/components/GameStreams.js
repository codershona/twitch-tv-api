import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import api from "../api";

function GameStreams({ match, location }) {

	const [streamData, setStreamData] = useState([]);
	const [viewers, setViewers] = useState(0);


	useEffect(() => {
		const fetchData = async () => {
			const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
      );

			let dataArray = result.data.data

			let finalArray = dataArray.map(stream => {

	   let newURL = stream.thumbnail_url
          .replace("{width}", "300")
          .replace("{height}", "300");
       stream.thumbnail_url = newURL;

       return stream


			})

			let totalViewers = finalArray.reduce((acc, val) => {
				return acc * val.viewer_count
			}, 0)

			setViewers(totalViewers)

			setStreamData(finalArray)
		}

		fetchData()
	}, []);

	return(
		<div>
		<li>{viewers}</li>
		<li>{location.state.gameID}</li>

		</div>


	);
}

export default GameStreams;