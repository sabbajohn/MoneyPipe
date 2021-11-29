import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IAction, IDataObject } from '../interfaces/dataInterfaces'
import { utilService } from '../services/util.service'
import { RootState } from '../store/store'
import { GetIcon } from './GetIcon'
import { FaRegEdit } from 'react-icons/fa'
import { VscTrash } from 'react-icons/vsc'
import { setSelectedAction } from '../store/actions/app-state.action'


interface IActionProps {
    action: IAction;
}


export const ActionPreview = ({ action }: IActionProps) => {

    const dispatch = useDispatch()
    const rawData: IDataObject = useSelector((state: RootState) => state.userModule.data)
    const selectedAction: string | null = useSelector((state: RootState) => state.appStateModule.selectedAction)

    const findCategoryData = (category: string) => {
        if (rawData) {
            const currCat = rawData.categories.find(currCat => currCat.title === category)
            return currCat
        }
    }

    const onDelete = () => {
        console.log('delete', action._id)
        // setShowActions(false)
    }

    const onEdit = () => {
        console.log('edit', action._id)
        // setShowActions(false)
    }

    const handleActionClick = () => {
        if(selectedAction === action._id){
            dispatch(setSelectedAction(null))
        } else {
            dispatch(setSelectedAction(action._id))
        }
    }

    const categoryData = findCategoryData(action.category)

    if (!categoryData) return <h1>Loading</h1>
    return (
        <div className="action-preview" onClick={handleActionClick}>
            <div className="left-side">
                <div className="action-details-icon" style={{ backgroundColor: categoryData.bgColor }}>
                    <GetIcon iconName={categoryData.icon} />
                </div>
                <div className="action-data">
                    <p className="action-date">{utilService.getRelativeDate(action.createdAt)}</p>
                    <h3>{action.description}</h3>
                    <p className="action-labels">{action.labels.map(label => <span key={`label-${action.createdAt}-${label}`}>{label}</span>)}</p>
                </div>
            </div>
            <div className="right-side">
                <h3>{action.amount.toLocaleString()}{rawData.currencySign}</h3>
            </div>
            <div className="action-preview-actions" style={{ transform: selectedAction === action._id ? 'translateX(0%)' : 'translateX(100%)' }}>
                <button onClick={onEdit}><FaRegEdit /></button>
                <button onClick={onDelete}><VscTrash /></button>
            </div>
        </div>
    )
}
