"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";
const UserRoleCard = () => {
  const [selectedRole, setSelectedRole] = useState("user");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle badge click
  const handleBadgeClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleChange = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-lg font-medium">Marc Atenson</h3>
            <p className="text-sm text-gray-500">marcinene@miial.com</p>
          </div>
          <div className="text-gray-400">Dec 19, 2023</div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="userRole">Role:</Label>
            <RadioGroup
              id="userRole"
              value={selectedRole}
              onValueChange={handleRoleChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin">Admin</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div>
            <h3 className="text-lg font-medium">Susan Drake</h3>
            <p className="text-sm text-gray-500">contact@susandrake.io</p>
          </div>
          <div className="text-gray-400">Dec 19, 2023</div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="userRole2">Role:</Label>
            <Select
              onValueChange={setSelectedRole}
              value={selectedRole}
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              {/* Here, we use SelectTrigger to manage the open state of the dropdown */}
              <SelectTrigger
                onClick={handleBadgeClick}
                className="p-0 border-none focus:outline-none focus:ring-0"
              >
                <Badge
                  variant={selectedRole === "admin" ? "default" : "secondary"}
                  className="cursor-pointer"
                >
                  {selectedRole === "admin" ? "Admin" : "User"}
                </Badge>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserRoleCard;
