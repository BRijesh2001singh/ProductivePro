import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Howl, Howler } from 'howler';
import successsound from '../sounds/success-1-6297.mp3'
// get list data from local storage
const getLocalList = () => {
    let tasklist = localStorage.getItem('Task-list');
    if (tasklist) {
        return JSON.parse(localStorage.getItem('Task-list'));
    } else {
        return [];
    }
};
//get completed  data from local storeage
const gettaskcounter = () => {
    let counter = localStorage.getItem('taskcounter');
    if (counter) {
        return parseInt(counter);
    }
    else return 0;
}
const Todo = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState(getLocalList());
    const [completed, setcompleted] = useState(gettaskcounter);

    const handleInput = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task === '') {
            toast.error('Please enter a task before adding it.');
            return;
        }

        setList([...list, task]);
        setTask('');
    };

    const deleteTask = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
        toast.error('Task deleted');
    };

    const taskCompleted = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
        if (list.length - 1 === 0) {
            const sound = new Howl({
                src: [successsound],
                volume: 2.0,
            });
            console.log(sound);
            sound.play();
            toast.success(`All tasks completed`);
        }
        else {
            toast.success(`Well Done! ${list.length - 1} remaining tasks`);
        }
        setcompleted(completed + 1);
    };
    //reseting taskcompleted
    const resetcomplete = () => {
        setcompleted(0);
    }
    // Adding data to local storage
    useEffect(() => {
        localStorage.setItem('Task-list', JSON.stringify(list));
    }, [list]);
    useEffect(() => {
        localStorage.setItem('taskcounter', JSON.stringify(completed));
    }, [completed])
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedList = [...list];
        const [movedItem] = reorderedList.splice(result.source.index, 1);
        reorderedList.splice(result.destination.index, 0, movedItem);

        setList(reorderedList);
    };
    const showhelp = () => {
        toast.info("HEY!You can drag and arrange tasks based on your priority");
    }
    useEffect(() => {
        setTimeout(() => {
            if (list.length === 0) {
                showhelp();
            }
        }, 2000)
    }, [])
    return (
        <div className='main-div'>
            <div className='child-div'>
                <span>Add New Task</span>
                <div className='add-items'>
                    <input type='text' placeholder='Write your task' value={task} onChange={handleInput} />
                    <i className='fas fa-plus add-btn' onClick={addTask} title='Add Item'></i>
                </div>
                <div className='achievements'><span>You have completed {completed} tasks</span>
                    <i className="fa fa-refresh" aria-hidden="true" onClick={resetcomplete} title='Reset completed tasks'></i>
                </div>
                <div className='show-items'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId='task-list'>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {list.map((ele, index) => (
                                        <Draggable key={index} draggableId={`task-${index}`} index={index}>
                                            {(provided) => (
                                                <div
                                                    className='each-item'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <h3>{ele}</h3>
                                                    <div className='showbtns'>
                                                        <i className='fas fa-check add-btn btn1' onClick={() => taskCompleted(index)}></i>
                                                        <i className='far fa-trash-alt add-btn btn2' title='Delete Item' onClick={() => deleteTask(index)}></i>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className='show-item'>
                    <button className='btn' onClick={() => setList([])}><span>Remove All Tasks</span></button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
