import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { BiSearchAlt } from 'react-icons/bi'
import { utilService } from '../services/util.service'

interface IHeaderProps {
    setSearchModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderBlock = ({setSearchModalOpen}: IHeaderProps) => {

    const currentViewMode = useSelector((state: RootState) => state.appStateModule.currentViewMode)
    const currentLabel = useSelector((state: RootState) => state.appStateModule.currentLabel)
    const filterBy = useSelector((state: RootState) => state.appStateModule.filterBy)

    const startDateString = utilService.getDateAsString(filterBy.startDate)
    const endDateString = utilService.getDateAsString(filterBy.endDate)

    return (
        <div className="header-block">
            <div className="header-block-content">
                {currentLabel && <h2>{currentLabel}</h2>}
                {(!currentLabel && currentViewMode) && <h2>{currentViewMode}</h2>}
                <p>{currentViewMode} of <b>{startDateString} - {endDateString}</b> incomes and expenses</p>
            </div>
            <div className="filter-btn">
                <BiSearchAlt onClick={() => {setSearchModalOpen(true)}}/>
            </div>
        </div>
    )
}
