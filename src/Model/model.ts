export class model
{
user;
items;

constructor()
{
    this.user = "Mitu",
    this.items = [
        {action:"Buy flower", done:false},
        {action:"Get Shoes", done:false},
        {action:"Collect  tickets", done:true},
        {action:"Do workout", done:false},
    ]
}

}

export class TodoItem
{
action;
done;

constructor(action,done)
{
    this.action = action;
    this.done = done;
    
}

}


