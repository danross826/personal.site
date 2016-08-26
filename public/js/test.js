/**
 * Created by danross on 8/26/16.
 */

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

randomIntFromInterval(1, 90)