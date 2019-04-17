
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

var getCarrierSquares = function()
{
    var id = "A";
    var returnArray = [];
    returnArray = returnArray.concat(createGridSquare(1,1,true,false, id));
    returnArray = returnArray.concat(createGridSquare(1,2,true,false, id));
    returnArray = returnArray.concat(createGridSquare(1,3,true,false, id));
    returnArray = returnArray.concat(createGridSquare(1,4,true,false, id));
    returnArray = returnArray.concat(createGridSquare(1,5,true,false, id));
    return returnArray;
}

var getBattleshipSquares = function()
{
    var id = "B";
    var returnArray = [];
    returnArray = returnArray.concat(createGridSquare(2,1,true,false, id));
    returnArray = returnArray.concat(createGridSquare(2,2,true,false, id));
    returnArray = returnArray.concat(createGridSquare(2,3,true,false, id));
    returnArray = returnArray.concat(createGridSquare(2,4,true,false, id));
    return returnArray;
}

var getDestroyerSquares = function()
{
    var id = "C";
    var returnArray = [];
    returnArray = returnArray.concat(createGridSquare(3,1,true,false, id));
    returnArray = returnArray.concat(createGridSquare(3,2,true,false, id));
    returnArray = returnArray.concat(createGridSquare(3,3,true,false, id));
    return returnArray;
}

var getSubmarineSquares = function()
{
    var id = "D";
    var returnArray = [];
    returnArray = returnArray.concat(createGridSquare(4,1,true,false, id));
    returnArray = returnArray.concat(createGridSquare(4,2,true,false, id));
    returnArray = returnArray.concat(createGridSquare(4,3,true,false, id));
    return returnArray;
}

var getPatrolBoatSquares = function()
{
    var id = "E";
    var returnArray = [];
    returnArray = returnArray.concat(createGridSquare(5,1,true,false, id));
    returnArray = returnArray.concat(createGridSquare(5,2,true,false, id));
    return returnArray;
}

var getInitialPlacement = function(){
    var returnArray = [];
    returnArray = returnArray.concat(getCarrierSquares());
    returnArray = returnArray.concat(getBattleshipSquares());
    returnArray = returnArray.concat(getDestroyerSquares());
    returnArray = returnArray.concat(getSubmarineSquares());
    returnArray = returnArray.concat(getPatrolBoatSquares());
    return returnArray;
}