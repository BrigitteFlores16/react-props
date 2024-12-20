import Card from './components/Card.jsx';
import { posts } from './data/Posts.jsx';

export default function Main (){
    return(
        <main>
            <section>
                <div className="card">
                    <div className="card-body">
                       
                     <Card/>
                  
                    </div>
                </div>
            </section>
        </main>
    );
}
