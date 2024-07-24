import React, { useState } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Twitter, Youtube, LucideIcon } from 'lucide-react';
import {LinkTypeInfo,LinkCardProps,} from '../types'

const linkTypes: LinkTypeInfo[] = [
  { value: 'github', label: 'GitHub', icon: Github },
  { value: 'youtube', label: 'YouTube', icon: Youtube },
  { value: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { value: 'facebook', label: 'Facebook', icon: Facebook },
  { value: 'twitter', label: 'Twitter', icon: Twitter },
];



const LinkCard: React.FC<LinkCardProps> = ({ id, index, link, onUpdate, onRemove }) => {
  const [type, setType] = useState<LinkType>(link.type || 'github');
  const [url, setUrl] = useState<string>(link.url || '');

  const handleTypeChange = (value: LinkType) => {
    setType(value);
    onUpdate(id, { ...link, type: value });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    onUpdate(id, { ...link, url: e.target.value });
  };

  const IconComponent = linkTypes.find(lt => lt.value === type)?.icon || Github;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DraggableProvided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <IconComponent className="mr-2" />
              <h3 className="text-lg font-semibold">Link #{index + 1}</h3>
            </div>
            <Button variant="ghost" onClick={() => onRemove(id)}>Remove</Button>
          </div>
          <div className="space-y-4">
            <Select value={type} onValueChange={handleTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {linkTypes.map((linkType) => (
                  <SelectItem key={linkType.value} value={linkType.value}>
                    <div className="flex items-center">
                      <linkType.icon className="mr-2" />
                      {linkType.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="url"
              placeholder="Enter URL"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default LinkCard;
