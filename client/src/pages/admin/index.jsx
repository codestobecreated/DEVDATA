import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateFilter, setDateFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [, setLocation] = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsLoggedIn(true);
    }
    const storedData = localStorage.getItem("contactData");
    if (storedData) {
      setContactData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    let filtered = contactData;
    if (dateFilter) {
      filtered = filtered.filter(submission => {
        const submissionDate = new Date(submission.timestamp).toISOString().split('T')[0];
        return submissionDate === dateFilter;
      });
    }
    if (subjectFilter) {
      filtered = filtered.filter(submission => submission.subject.toLowerCase().includes(subjectFilter.toLowerCase()));
    }
    setFilteredData(filtered);
  }, [contactData, dateFilter, subjectFilter]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("adminToken", "loggedIn");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <Button onClick={handleLogout}>
              Logout
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Form Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Filter by Date</label>
                    <Input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="bg-secondary/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Filter by Subject</label>
                    <Input
                      type="text"
                      placeholder="Search subject..."
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="bg-secondary/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>
              {filteredData.length === 0 ? (
                <p className="text-muted-foreground">No contact submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {filteredData.map((submission, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p className="font-medium">{submission.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{submission.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Company Name</p>
                          <p className="font-medium">{submission.company || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Role / Position</p>
                          <p className="font-medium">{submission.role || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Contact Number</p>
                          <p className="font-medium">{submission.phone || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="font-medium">{submission.address || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">Subject</p>
                        <p className="font-medium">{submission.subject}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">Message</p>
                        <p className="whitespace-pre-wrap">{submission.message}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Submitted</p>
                        <p className="text-sm">{new Date(submission.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
