"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Update portfolio with latest projects",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Research new JavaScript frameworks",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Complete online course on TypeScript",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: "4",
      title: "Refactor code for e-commerce project",
      completed: false,
      createdAt: new Date(),
    },
  ])

  const [newTaskTitle, setNewTaskTitle] = useState("")

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTasks([newTask, ...tasks])
      setNewTaskTitle("")
    }
  }

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTaskTitle) {
      e.preventDefault()
      addTask()
    }
  }

  const activeTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <div className="min-h-screen bg-white">
      <main className="container max-w-2xl px-4 py-10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <SectionHeading title="Task Tracker" />
        <p className="mt-2 text-gray-600">
          Keep track of your personal and professional tasks.
          <span className="block mt-1 text-sm text-gray-500">(Access this page with Shift + Alt + T)</span>
        </p>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
            <CardDescription>What do you need to accomplish?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter task title..."
              />
              <Button onClick={addTask} className="gap-2">
                <Plus className="w-4 h-4" /> Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="active" className="mt-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active ({activeTasks.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-4">
            {activeTasks.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No active tasks. Add a new task to get started!</div>
            ) : (
              <div className="space-y-2">
                {activeTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg group">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="flex items-center justify-center w-5 h-5 border rounded-full hover:bg-gray-100"
                      >
                        <Check className="w-3 h-3 text-transparent group-hover:text-gray-400" />
                      </button>
                      <span>{task.title}</span>
                    </div>
                    <button onClick={() => deleteTask(task.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            {completedTasks.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No completed tasks yet.</div>
            ) : (
              <div className="space-y-2">
                {completedTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg group">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="flex items-center justify-center w-5 h-5 bg-gray-100 border rounded-full"
                      >
                        <Check className="w-3 h-3 text-gray-600" />
                      </button>
                      <span className="line-through text-gray-500">{task.title}</span>
                    </div>
                    <button onClick={() => deleteTask(task.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
