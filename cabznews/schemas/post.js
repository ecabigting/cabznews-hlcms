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
        }
    ]
}