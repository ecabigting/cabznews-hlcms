export default {
    title : 'Post',
    name : 'post',
    type : 'document',
    fields: [
        {
            title:'Title',
            name: 'title',
            type:'string',
            validation: Rule => [
                Rule.required().min(10).error('Title must be atleast 10 characters long'),
                Rule.required().max(50).error('Title must be not more than 50 characters')
            ]
        },
        {
            tite:'Author',
            name:'author',
            type:'reference',
            to: [{type:'author'}],
            validation: Rule => Rule.max(120).error('Required')
        },
        {
            title:'Excerpt',
            name:'excerpt',
            type:'text',
            validation: Rule => Rule.max(120).error('Must be less than 120 characters long')
        },
        {
            title:'Content',
            name:'content',
            type:'text',
            validation: Rule => Rule.max(120).error('Required')
        },
        {
            title:'Image',
            name:'image',
            type:'image',
            validation: Rule => Rule.max(120).error('Required')
        }
    ]
}