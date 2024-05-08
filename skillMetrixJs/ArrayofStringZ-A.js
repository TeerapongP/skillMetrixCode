let names = ['Jojo', 'Banglee', 'Oreo', 'Prayut', 'Meow'];
names.sort((a, b) => b.localeCompare(a));

console.log(names);
// output => [ 'Prayut', 'Oreo', 'Meow', 'Jojo', 'Banglee' ]