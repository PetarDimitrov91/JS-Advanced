/**
 *
 * @param {object} obj
 */

function worker(obj){
    const newObj = obj;

    function hydrate() {
        newObj.dizziness = false;
        newObj.levelOfHydrated += 0.1 * newObj.weight * newObj.experience;
    }

    if(newObj.dizziness){
        hydrate();
    }

    return newObj;
}

console.log(worker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
));

