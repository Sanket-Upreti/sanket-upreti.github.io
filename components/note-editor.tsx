"use client"

import type React from "react"

import { useState } from "react"
import { Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function NoteEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault()
      handleAddTag()
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Title
        </label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" />
      </div>

      <div>
        <label htmlFor="content" className="block mb-2 text-sm font-medium">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          rows={8}
          className="resize-none"
        />
      </div>

      <div>
        <label htmlFor="tags" className="block mb-2 text-sm font-medium">
          Tags
        </label>
        <div className="flex gap-2">
          <Input
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add tags"
          />
          <Button type="button" onClick={handleAddTag} variant="outline">
            Add
          </Button>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
                <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-gray-500 hover:text-gray-700">
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button className="w-full">Save Note</Button>
    </div>
  )
}
