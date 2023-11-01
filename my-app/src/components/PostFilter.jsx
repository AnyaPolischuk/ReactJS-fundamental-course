import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
        <MyInput
          value={filter.searchQuery}
          onChange={(event) => setFilter({...filter, searchQuery: event.target.value})}
          placeholder="Поиск..."
        />
        <MySelect 
          onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"},
          ]}  
          defaultValue="Сортировка по"  
        />
      </div>
  )
};
