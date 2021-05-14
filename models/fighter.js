exports.fighter = {
    "id": { reserved: true},
    "name": {required: true, type: 'string', min:3},
    "health": { min: 80, type: 'number',max:120, default: 100},
    "power": {required: true,type: 'number',min:1, max:100},
    "defense": {required: true,type: 'number',min: 1, max:10}, // 1 to 10
}