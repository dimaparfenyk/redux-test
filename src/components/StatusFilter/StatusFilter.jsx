import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import css from "./StatusFilter.module.css";
import Button from "../Button/Button";
import { setStatusFilter } from "../../redux/filtersSlice";

const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
