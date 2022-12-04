import './Kanban.css'
import { useState } from 'react'
import kanbanData from '../../kanbanData'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Card from "../../components/Card/Card"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const Kanban = () => {
  const [data, setData] = useState(kanbanData)

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
        const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
        const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

        const sourceCol = data[sourceColIndex]
        const destinationCol = data[destinationColIndex]

        const sourceTask = [...sourceCol.tasks]
        const destinationTask = [...destinationCol.tasks]

        const [removed] = sourceTask.splice(source.index, 1)
        destinationTask.splice(destination.index, 0, removed)

        data[sourceColIndex].tasks = sourceTask
        data[destinationColIndex].tasks = destinationTask

        setData(data)
    }
  }

  return (
    <>
    <Navbar/>
    <Sidebar />
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map(section => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className='kanban_section'
                ref={provided.innerRef}
              >
                <div className="kanban_section_title">
                  {section.title}
                </div>
                <div className="kanban_section_content">
                  {section.tasks.map((task, index) => (
                    
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? '0.5' : '1'
                          }}
                        >
                          <Card>
                            {task.title}
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
    </>
  )
}

export default Kanban

