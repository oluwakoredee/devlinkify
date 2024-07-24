"use client"
import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button";
import LinkCard from './link-card';
import { Link } from '@/types';


const LinkManager: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinks(items);
  };

  const addNewLink = () => {
    setLinks([...links, { id: uuidv4(), type: 'github', url: '' }]);
  };

  const updateLink = (id: string, updatedLink: Partial<Link>) => {
    setLinks(links.map(link => link.id === id ? { ...link, ...updatedLink } : link));
  };

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const saveToDb = () => {
    console.log('Saving links to database:', links);
  };

  return (
    <div className="p-4">
      <Button onClick={addNewLink} className="mb-4">+ Add new link</Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {links.map((link, index) => (
                <LinkCard
                  key={link.id}
                  id={link.id}
                  index={index}
                  link={link}
                  onUpdate={updateLink}
                  onRemove={removeLink}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className='flex justify-end'>
        <Button onClick={saveToDb} type='submit' className='w-full rounded-lg flex justify-center md:justify-end md:px-6 md:w-20 items-center mt-20 h-[48px] text-white bg-[rgba(99,60,255,1)]'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default LinkManager;
