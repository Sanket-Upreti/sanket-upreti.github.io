"use client"

import { useEffect, useState, useCallback } from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { FileText, Keyboard, LayoutDashboard, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from "@/constants"
  
export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
    if (e.key === "T" && e.altKey && e.shiftKey) {
      e.preventDefault()
      router.push("/tasks")
    }
  }, [router])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleSelect = useCallback((action: () => void) => {
    setOpen(false)
    action()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed z-50 flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 transition-colors bg-white border rounded-full shadow-sm top-4 right-4 hover:text-gray-900"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="flex items-center gap-1 px-1.5 py-0.5 text-xs border rounded bg-gray-50">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="border-none">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem
                onSelect={() => handleSelect(() => router.push("/"))}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                <span>Home</span>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect(() => router.push("/projects"))}
              >
                <Keyboard className="w-4 h-4 mr-2" />
                <span>Projects</span>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect(() => router.push("/notes"))}
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>Notes</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Social">
              <CommandItem
                onSelect={() => handleSelect(() => window.open(GITHUB_URL, "_blank"))}
              >
                <span>GitHub</span>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect(() => window.open(LINKEDIN_URL, "_blank"))}
              >
                <span>LinkedIn</span>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect(() => window.open(MEDIUM_URL, "_blank"))}
              >
                <span>Medium</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
