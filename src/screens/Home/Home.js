import React from 'react';
import Header from '../../common/header/Header';
import {withStyles} from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';




const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    }
 });

class Home extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <div>
                <Header/>
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {
                        moviesData.map(movies=>(
                            <GridListTile key={movies.id}>
                                <img src={movies.poster_url} alt={movies.title}/>
                                <GridListTileBar title={movies.title}/>

                            </GridListTile>
                        ))
                    }

                </GridList>
            </div>
        )
    }
}
export default withStyles(styles) (Home);