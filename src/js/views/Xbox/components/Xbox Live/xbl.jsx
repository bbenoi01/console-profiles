import React, { Component } from 'react';

export default class XboxLive extends Component {
    render() {
        const { gamertag, name, location, bio, gamerscore, tier, motto, avatar, friends, xbgames } = this.props;

        return (
            <div
                className='col s12'
            >
                <div
                    className="card"
                    id='xb'
                >
                    <div
                        className="card-content white-text"
                    >
                        <span
                            className="card-title"
                        >
                            <b>{gamertag}</b>
                        </span>
                        <div
                            className="row"
                        >
                            <div
                                className="col s4"
                            >
                                <div
                                    className="card horizontal xb"
                                >
                                    <div
                                        className="card-image"
                                    >
                                        <img
                                            src={avatar}
                                            alt="avatar"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div
                                        className="card-stacked"
                                    >
                                        <div
                                            className="card-content"
                                        >
                                            <b className="black-text">GamerScore:</b> {gamerscore}<br/>
                                            <b className="black-text">Name:</b> {name}<br/>
                                            <b className="black-text">Location:</b> {location}<br/>
                                            <b className="black-text">Bio:</b> {bio}<br/>
                                            <b className="black-text">Motto:</b> {motto}<br/>
                                            <b className="black-text">Tier:</b> {tier}<br/>
                                                {friends.map(friend =>
                                                    <img key={friend.Gamertag} src={friend.GameDisplayPicRaw} alt="responsive" className="img-fluid"/>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col s4"
                            >
                                <span
                                    className="card-title center"
                                >
                                    Games
                                </span>
                                <div
                                    className="card-content xbgames"
                                >
                                    {xbgames.filter(xbgame => xbgame.titleType === 'DGame').map(xbgame =>
                                        <div className="card horizontal" id="xb" key={xbgame.titleId}>
                                            <div className="card-stacked">
                                                <div className="card-content right">
                                                    <b className="black-text">Title:</b> {xbgame.name}<br/>
                                                    <b className="black-text">Acheivements Earned:</b> {xbgame.earnedAchievements}<br/>
                                                    <b className="black-text">Gamer Score:</b> {xbgame.currentGamerscore}/{xbgame.maxGamerscore}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className="col s4"
                            >
                                <span
                                    className="card-title center"
                                >
                                    Acheivements
                                </span>
                                <div
                                    className="card-content xbgames"
                                >
                                    {xbgames.filter(xbgame => xbgame.titleType === 'DGame').map(xbgame =>
                                        <div className="card horizontal" id="xb" key={xbgame.titleId}>
                                            <div className="card-stacked">
                                                <div className="card-content right">
                                                    <b className="black-text">Title:</b> {xbgame.name}<br/>
                                                    <b className="black-text">Acheivements Earned:</b> {xbgame.earnedAchievements}<br/>
                                                    <b className="black-text">Gamer Score:</b> {xbgame.currentGamerscore}/{xbgame.maxGamerscore}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}