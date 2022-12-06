import {FilterLabel, FilterField} from './Filter.styled'

export const Filter = ({ onChange }) => {
    return (
        <FilterField>
            <FilterLabel>
            Find contacts by name
            <input type="text" name="filter" onChange={onChange} />
            </FilterLabel>
        </FilterField>
    );
};