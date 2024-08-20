var move = [moveEast(),moveEast(),moveEast(),moveEast(),moveEast(),moveNorth(),moveNorth(),moveNorth(),moveNorth(),moveNorth(),moveWest(),moveWest(),moveWest(),moveWest(),moveWest(),moveSouth(),moveSouth(),moveSouth(),moveSouth(),moveSouth()];
for (var i = 0; i < move.length; i++){move[i]}; // dir: E*5 N*5 W*5 S*5
activateTeleporter();