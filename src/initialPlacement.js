

//x should be numeric
//y should be alphabetical
//hasShip should be boolean
//isShot
var createGridSquare = function(x,y,hasShip,isShot, shipId){
    var gridSquare = new Object();
    gridSquare.x = x;
    gridSquare.y = y;
    gridSquare.containsShip = hasShip;
    gridSquare.isShot = isShot;
    gridSquare.shipId = shipId;
    return gridSquare;
}

var getCarrierSquares = function(formation = 0)
{
    var id = "A";
    var returnArray = [];
    switch(formation) {
        case 2:
            returnArray = returnArray.concat(createGridSquare(9,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,3,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,4,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,5,true,false, id));
            break;
        case 1:
            returnArray = returnArray.concat(createGridSquare(9,5,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,6,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,7,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,8,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,9,true,false, id));
            break;
        default:
            returnArray = returnArray.concat(createGridSquare(1,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(1,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(1,3,true,false, id));
            returnArray = returnArray.concat(createGridSquare(1,4,true,false, id));
            returnArray = returnArray.concat(createGridSquare(1,5,true,false, id));
        // code block
    }

    return returnArray;
}

var getBattleshipSquares = function(formation = 0)
{
    var id = "B";
    var returnArray = [];

    switch(formation) {
        case 2:
            returnArray = returnArray.concat(createGridSquare(0,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(0,3,true,false, id));
            returnArray = returnArray.concat(createGridSquare(0,4,true,false, id));
            returnArray = returnArray.concat(createGridSquare(0,5,true,false, id));
            break;
        case 1:
            returnArray = returnArray.concat(createGridSquare(8,6,true,false, id));
            returnArray = returnArray.concat(createGridSquare(8,7,true,false, id));
            returnArray = returnArray.concat(createGridSquare(8,8,true,false, id));
            returnArray = returnArray.concat(createGridSquare(8,9,true,false, id));
            break;
        default:
            returnArray = returnArray.concat(createGridSquare(2,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(2,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(2,3,true,false, id));
            returnArray = returnArray.concat(createGridSquare(2,4,true,false, id));
        // code block
    }

    return returnArray;
}

var getDestroyerSquares = function(formation = 0)
{
    var id = "C";
    var returnArray = [];
    switch(formation) {
        case 2:
            returnArray = returnArray.concat(createGridSquare(6,4,true,false, id));
            returnArray = returnArray.concat(createGridSquare(6,5,true,false, id));
            returnArray = returnArray.concat(createGridSquare(6,6,true,false, id));
            break;
        case 1:
            returnArray = returnArray.concat(createGridSquare(7,7,true,false, id));
            returnArray = returnArray.concat(createGridSquare(7,8,true,false, id));
            returnArray = returnArray.concat(createGridSquare(7,9,true,false, id));
            break;
        default:
            returnArray = returnArray.concat(createGridSquare(3,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(3,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(3,3,true,false, id));
        // code block
    }

    return returnArray;
}

var getSubmarineSquares = function(formation = 0)
{
    var id = "D";
    var returnArray = [];

    switch(formation) {
        case 2:
            returnArray = returnArray.concat(createGridSquare(0,0,true,false, id));
            returnArray = returnArray.concat(createGridSquare(0,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(0,2,true,false, id));
            break;
        case 1:
            returnArray = returnArray.concat(createGridSquare(6,7,true,false, id));
            returnArray = returnArray.concat(createGridSquare(6,8,true,false, id));
            returnArray = returnArray.concat(createGridSquare(6,9,true,false, id));
            break;
        default:
            returnArray = returnArray.concat(createGridSquare(4,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(4,2,true,false, id));
            returnArray = returnArray.concat(createGridSquare(4,3,true,false, id));
        // code block
    }

    return returnArray;
}

var getPatrolBoatSquares = function(formation = 0)
{
    var id = "E";
    var returnArray = [];

    switch(formation) {
        case 2:
            returnArray = returnArray.concat(createGridSquare(8,9,true,false, id));
            returnArray = returnArray.concat(createGridSquare(9,9,true,false, id));
            break;
        case 1:
            returnArray = returnArray.concat(createGridSquare(5,8,true,false, id));
            returnArray = returnArray.concat(createGridSquare(5,9,true,false, id));
            break;
        default:
            returnArray = returnArray.concat(createGridSquare(5,1,true,false, id));
            returnArray = returnArray.concat(createGridSquare(5,2,true,false, id));
        // code block
    }


    return returnArray;
}

export const getInitialPlacement = (formation = 0) => {
  var returnArray = [];
  returnArray = returnArray.concat(getCarrierSquares(formation));
  returnArray = returnArray.concat(getBattleshipSquares(formation));
  returnArray = returnArray.concat(getDestroyerSquares(formation));
  returnArray = returnArray.concat(getSubmarineSquares(formation));
  returnArray = returnArray.concat(getPatrolBoatSquares(formation));
  return returnArray;
};
