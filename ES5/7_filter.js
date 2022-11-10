const salaries = [1000, 1500, 1800, 2300];
salaries.filter((props) => {
    console.log(props > 1400);
});


const filterArray = salaries.filter((props) => {
    return (props > 1400);
});
console.log(filterArray);