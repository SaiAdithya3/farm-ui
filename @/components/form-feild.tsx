import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight } from "lucide-react";
export function FormField() {
  return (
    <section className="custom-screen-lg  mx-auto z-20">
      <div className="relative backdrop-blur-3xl z-10 max-w-4xl mx-auto  space-y-4">
        <Card className="relative mt-20 py-10 z-20 backdrop-blur-3xl">
          <CardHeader>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className=""></div>
            <form className="space-y-4 z-20">
              <div className="grid grid-cols-2 gap-4 z-20">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <LinkItem
              href="https://t.me/farmui"
              variant="default"
              className="inline-flex text-center group items-center w-full justify-center bg-gradient-to-tr from-black/90 via-zinc-800 to-black  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
            >
              Submit
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </LinkItem>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}