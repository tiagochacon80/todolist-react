import * as C from './styles';

export const AddArea = () => {
    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text" 
                placeholder="Add a task"
            />
        </C.Container>
    );
}