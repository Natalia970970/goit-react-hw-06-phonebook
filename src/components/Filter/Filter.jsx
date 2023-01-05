import {FilterLabel, FilterField} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/FilterSlice'

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <FilterField>
            <FilterLabel>
            Find contacts by name
            <input type="text" name="filter" onChange={event => dispatch(setFilter(event.target.value))} />
            </FilterLabel>
        </FilterField>
    );
};