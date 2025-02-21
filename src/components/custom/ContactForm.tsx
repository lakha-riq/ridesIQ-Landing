"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(1, "Subject is required"),
	text: z.string().min(1, "Message is required"),
});

export default function MyForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			subject: "",
			text: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: values.email,
					subject: values.subject,
					text: values.text,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send email");
			}

			toast.success("Successfully sent the mail");
			form.reset();
		} catch (error) {
			console.error("Form submission error", error);
			toast.error(error instanceof Error ? error.message : "Failed to submit the form. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (

		<div className="relative flex min-h-[60vh] h-full w-full items-center justify-center px-4">

			<Card className="mx-auto max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl">Contact Us</CardTitle>
					<CardDescription>Please fill out the form below and we will get back to you shortly.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<div className="grid gap-4">
								{/* Name Field */}
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="grid gap-2">
											<FormLabel htmlFor="name">Name</FormLabel>
											<FormControl>
												<Input
													id="name"
													placeholder="John Doe"
													type="text"
													autoComplete="name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}

								/>
							</FormControl>
							<FormDescription>email address</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Input
									placeholder="I needed to contact you for XYZ"
									{...field}
								/>
							</FormControl>
							<FormDescription>the reason to reach out</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="text"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="so i was walking and saw someone checking your website... "
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Submit"}
				</Button>
			</form>
		</Form>
	);
}
