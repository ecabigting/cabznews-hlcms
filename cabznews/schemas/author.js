export default {
    title : 'Author',
    name : 'author',
    type : 'document',
    fields: [
        {
            title: 'Full Name',
            name: 'full_name',
            type:'string',
            validation: Rule => Rule.required().error('Required')
        },
        {
            title: 'Short Bio',
            name: 'short_bio',
            type:'text'
        },
        {
            title:'Avatar',
            name:'avatar',
            validation: Rule => Rule.required().error('Required')
        }
    ]
}