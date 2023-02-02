window.onload = function()
           {
               class Levels extends React.Component
               {
                   render()
                   {
                       return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
                   }
               }

               ReactDOM.render(
                 React.createElement('div', null,
   React.createElement(Levels, { name : 'Chris' }),
   React.createElement(Levels, { name : 'Ming' }),
   React.createElement(Levels, { name : 'Joe' })
 ),

                   document.getElementById('levels')
               );
           };
