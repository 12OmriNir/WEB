const nums = [1, 4, 10, 8, 30, 12]
console.log(nums)

const mapped = nums.map(item => item * 2)
console.log(mapped);

console.log('*************************************')

const mix = [1, 'hey', 14, 'aaa', '77', 77, 'Bye']
console.log(mix)

const filtered = mix.filter(item => Number.isInteger(item))
console.log(filtered)

console.log('*************************************')

const numbers = [1, 1, 8, 16, 22, 8, 33, 1, 9]
console.log(numbers)
let history = []

numbers.forEach(item => {
    if(!history.includes(item)){
        history.push(item)
    }
})

console.log(history.reduce((total, current) => total += current))

console.log('*************************************')

const words = ['hole', 'bob', 'insperation', 'boom', 'Arcticle']
console.log(words)

const change = words.filter(word => word.length > 6)
console.log(change)

console.log('*************************************')

const objects = [
    {id: 1, name: 'noam'},
    {id: 2, name: 'ron'},
    {id: 14, name: 'ben'},
    {id: 20, name: 'allah'},
]

console.log(objects)

const person = objects.find(element => element.id > 13)
console.log(person)

